import { useRouter } from 'next/router';
import { useState, ChangeEvent } from 'react';

const ProjectSelectionComponent = () => {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState('');

    const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedProject(e.target.value);
    };

    const handleRedirect = () => {
        if (selectedProject === 'Etude') {
            router.push('/your-redirect-page-for-etude');
        } else {
            // Handle other project types as needed
        }
    };

    return (
        <div>
            <label htmlFor="projectSelect">Sélectionnez le type de projet:</label>
            <select id="projectSelect" value={selectedProject} onChange={handleSelectionChange}>
                <option value="">Choisissez un type de projet</option>
                <option value="Etude">Étude</option>
                {/* Add other project types here */}
            </select>
            <button onClick={handleRedirect}>Continuer</button>
        </div>
    );
};

export default ProjectSelectionComponent;
