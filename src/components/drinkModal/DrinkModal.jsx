import "./index.scss";

const DrinkModal = ({ modalSettings }) => {
	return (
		<div className="DrinkModal">
			<div className="DrinkModal__info"></div>
			<div className="DrinkModal__photo">
				<img
					src={modalSettings.modalData.strThumb}
					alt="Foto drink"
				/>
			</div>
		</div>
	);
};

export default DrinkModal;
