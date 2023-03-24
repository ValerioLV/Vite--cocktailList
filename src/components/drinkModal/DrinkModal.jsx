import styles from "./index.module.scss";

const DrinkModal = ({ modalSettings, setModalSettings }) => {
	const CloseModale = () => {
		setModalSettings((prev) => ({ ...prev, isVisible: false }));
	};

	return (
		<div className={styles.DrinkModal}>
			<div className={styles.info}>
				<h1>Nome: {modalSettings.modalData.strDrink}</h1>
				<p>Tipo: {modalSettings.modalData.strCategory}</p>
				<p>Bicchiere: {modalSettings.modalData.strGlass}</p>
				<p>
					Istruzioni: <br />
					{modalSettings.modalData.strInstructionsIT}
				</p>
			</div>
			<button
				className={styles.closeBtn}
				onClick={CloseModale}>
				x
			</button>
			<div className={styles.photo}>
				<img
					src={modalSettings.modalData.strDrinkThumb}
					alt="Foto drink"
				/>
			</div>
		</div>
	);
};

export default DrinkModal;
