import React from 'react';
import Section from './../Section';
import Status from '../../Status/Status';

const WorkStatus: React.FC = () => (
	<Section
		id='my-articles'
		title='Discussions'
		description='Links to my favourite articles, podcasts & public speaking.'>
		<Status isWorking={true} />
	</Section>
);

export default WorkStatus;
