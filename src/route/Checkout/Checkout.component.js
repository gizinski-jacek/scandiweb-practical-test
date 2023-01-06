import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import './Checkout.extension.style';
import ProgressBar from 'src/components/ProgressBar';

class Checkout extends SourceCheckout {
	componentDidUpdate() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	renderProgressbar() {
		const { checkoutStep } = this.props;

		const steps = Object.entries(this.stepMap).map((item) => {
			return { name: item[0], displayValue: item[1].title.value.split(' ')[0] };
		});
		return <ProgressBar steps={steps} checkoutStep={checkoutStep} />;
	}

	render() {
		return (
			<main block='Checkout'>
				{this.renderProgressbar()}
				<ContentWrapper
					wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
					label={__('Checkout page')}
				>
					{this.renderSummary(true)}
					<div block='Checkout' elem='Step'>
						{this.renderTitle()}
						{this.renderGuestForm()}
						{this.renderStep()}
						{this.renderLoader()}
					</div>
					<div>
						{this.renderSummary()}
						{this.renderPromo()}
						{this.renderCoupon()}
					</div>
				</ContentWrapper>
			</main>
		);
	}
}

export default Checkout;
