import React from 'react';
import Section from '../atom/Section';
import Status from '../atom/Status';

const WorkStatus: React.FC = () => (
	<Section
		id='my-articles'
		title='Discussions'
		description='Links to my favourite articles, podcasts & public speaking.'
	>
		<Status isWorking={true} />
	</Section>
);

export default WorkStatus;
