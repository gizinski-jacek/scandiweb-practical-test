import { PureComponent } from 'react';

export default class ProgressBar extends PureComponent {
	render() {
		const { steps, currentStep } = this.props;
		// commit test
		return (
			<div className='progressbar'>
				<div className='progressbar-list'>
					{steps.map((item, index) => {
						if (steps.length - 1 === index) {
							return;
						}
						return (
							<div
								className={
									currentStep === item.name
										? 'active progressbar-item'
										: 'progressbar-item'
								}
								key={item.name}
							>
								<span className='progressbar-item-count'>
									<span className='count'>{index + 1}</span>
									<span className='checksign'></span>
								</span>
								<span className='progressbar-item-label'>
									{item.displayValue}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
