import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryListContainer from './RepositoryListContainer';
import formatInThousands from '../../utils/formatInThousands';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = [ // no edges/nodes because useRepositories hook already maps to nodes
                {
                    id: 'jaredpalmer.formik',
                    fullName: 'jaredpalmer/formik',
                    description: 'Build forms in React, without the tears',
                    language: 'TypeScript',
                    forksCount: 1619,
                    stargazersCount: 21856,
                    ratingAverage: 88,
                    reviewCount: 3,
                    ownerAvatarUrl:
                        'https://avatars2.githubusercontent.com/u/4060187?v=4',
                },
                {
                    id: 'async-library.react-async',
                    fullName: 'async-library/react-async',
                    description: 'Flexible promise-based React data loader',
                    language: 'JavaScript',
                    forksCount: 69,
                    stargazersCount: 1760,
                    ratingAverage: 72,
                    reviewCount: 3,
                    ownerAvatarUrl:
                        'https://avatars1.githubusercontent.com/u/54310907?v=4',
                },
            ];
            const { debug, getByTestId } = render(<RepositoryListContainer repositories={repositories} />);
            debug();
            repositories.forEach(repo => {
                expect(getByTestId(`${repo.id}/Name`)).toHaveTextContent(repo.fullName);
                expect(getByTestId(`${repo.id}/Desc`)).toHaveTextContent(repo.description);
                expect(getByTestId(`${repo.id}/Lang`)).toHaveTextContent(repo.language);
                expect(getByTestId(`${repo.id}/Forks`)).toHaveTextContent(formatInThousands(repo.forksCount));
                expect(getByTestId(`${repo.id}/Stars`)).toHaveTextContent(formatInThousands(repo.stargazersCount));
                expect(getByTestId(`${repo.id}/Rating`)).toHaveTextContent(formatInThousands(repo.ratingAverage));
                expect(getByTestId(`${repo.id}/Reviews`)).toHaveTextContent(formatInThousands(repo.reviewCount));
            });
        });
    });
});