import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: "https://github.com/unform/unform"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <RepositoryItem repository={repository} />
                    <RepositoryItem repository={repository} />
                    <RepositoryItem repository={repository} />
                    <RepositoryItem repository={repository} />
                </li>
            </ul>
        </section>
    )
}