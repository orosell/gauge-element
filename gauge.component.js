class gauge extends HTMLElement {
	constructor() {
		super();
		this.color = this.getAttribute('color') ?? "#000";
		this.bg = this.getAttribute('background') ?? "#fff";;
		this.track = this.getAttribute('track') ?? "#ccc";

		this.progress = this.getAttribute('progress') ?? null;
		if(!!this.progress){
			this.rotation = 360*(this.progress/100);
			this.size = this.getAttribute('size');
			this.text = this.getAttribute('text');
		}
	}

	connectedCallback() {
		if(!!this.progress){
			const shadow = this.attachShadow({mode : 'open' }) ;
			const style = document.createElement("style");
			const wrapper = document.createElement("div");
			wrapper.setAttribute('class','progress-pie');

			if(this.progress > 50)
				wrapper.setAttribute('class','progress-pie gt-50');

			const progress = document.createElement("div");
			progress.setAttribute('class','ppc-progress');

			const progressFill = document.createElement("div");
			progressFill.setAttribute('class','ppc-progress-fill');

			progress.appendChild(progressFill);

			const percents = document.createElement("div");
			percents.setAttribute('class','ppc-percents');

			const percentsWrapper = document.createElement("div");
			percentsWrapper.setAttribute('class','pcc-percents-wrapper');

			const percentsText = document.createElement('span');
			percentsText.textContent = this.text;
			percentsWrapper.appendChild(percentsText);

			percents.appendChild(percentsWrapper);


			wrapper.appendChild(progress);
			wrapper.appendChild(percents);

			style.textContent = `
					.progress-pie {
					  width:${this.size}px;
					  height: ${this.size}px;
					  border-radius: 50%;
					  position: relative;
					  background: #e9ecef;
					  box-shadow: 0 .125rem .25rem inset rgba(0,0,0,.075)!important;
					}
					.progress-pie.gt-50 {
					  background-color: ${this.color};
					}

					.ppc-progress {
					  content: "";
					  position: absolute;
					  border-radius: 50%;
					  left: calc(50% - calc(${this.size}px / 2));
					  top: calc(50% - calc(${this.size}px / 2));
					  width: ${this.size}px;
					  height: ${this.size}px;
					  clip: rect(0, ${this.size}px, ${this.size}px, calc(${this.size}px / 2));
					}
					.ppc-progress .ppc-progress-fill {
					  content: "";
					  position: absolute;
					  border-radius: 50%;
					  left: calc(50% - calc(${this.size}px / 2));
					  top: calc(50% - calc(${this.size}px / 2));
					  width: ${this.size}px;
					  height: ${this.size}px;
					  clip: rect(0, calc(${this.size}px / 2), ${this.size}px, 0);
					  background: ${this.color};
					  transform: rotate(${this.rotation}deg);
					}
					.gt-50 .ppc-progress {
					  clip: rect(0, calc(${this.size}px / 2), ${this.size}px, 0);
					}
					.gt-50 .ppc-progress .ppc-progress-fill {
					  clip: rect(0, ${this.size}px, ${this.size}px, calc(${this.size}px / 2));
					  background: ${this.track};
					  box-shadow: 0 .125rem .25rem inset rgba(0,0,0,.075)!important;
					}

					.ppc-percents {
					  content: "";
					  position: absolute;
					  border-radius: 50%;
					  left: calc(50% - calc(${this.size}px * 4/5) /2);
					  top: calc(50% - calc(${this.size}px * 4/5)/2);
					  width: calc(${this.size}px * 4/5);
					  height: calc(${this.size}px * 4/5);
					  text-align: center;
					  display: table;
					  background: ${this.bg};
					}
					.ppc-percents span {
					  display: block;
					  font-size: ${(2 - (this.text.length-1)/10)}em;
					  font-weight: bold;
					  color: ${this.color};
					}

					.pcc-percents-wrapper {
					  display: table-cell;
					  vertical-align: middle;
					}

					.progress-pie-chart {
					  margin: 50px auto 0;
					}
			`;
			this.shadowRoot.append(style,wrapper);
		}else{
			console.log('error');
		}
	}
}
window.customElements.define('gauge-element', gauge);