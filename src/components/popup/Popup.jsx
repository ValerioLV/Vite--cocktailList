import styles from "./index.module.scss";

const Popup = ({ setPopupSettings, popupSettings }) => {
	setTimeout(() => {
		setPopupSettings((prev) => ({ ...prev, isVisible: false }));
	}, 1380);

	return (
		<div className={styles.Popup}>
			<p>
				Hai prenotato al nome di {popupSettings.popupData.nome} alla data{" "}
				{popupSettings.popupData.date}
			</p>
		</div>
	);
};

export default Popup;
