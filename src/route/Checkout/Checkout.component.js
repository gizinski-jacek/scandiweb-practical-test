import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import Progressbar from 'src/components/Progressbar';
import './Checkout.extension.style.scss';
import ContentWrapper from 'Component/ContentWrapper';

class Checkout extends SourceCheckout {
	renderProgressbar() {
		const { checkoutStep } = this.props;

		const steps = Object.entries(this.stepMap).map((item) => {
			return { name: item[0], displayValue: item[1].title.value.split(' ')[0] };
		});
		return <Progressbar steps={steps} currentStep={checkoutStep} />;
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
