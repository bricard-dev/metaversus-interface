import styles from '../styles';

const WorldCard = ({ position, imgUrl, title }) => (
  <div
    className={`absolute ${position} w-[217px] h-[167px] hidden md:flex ${styles.flexCenter} rounded-3xl bg-[#5d6680]`}
  >
    <img src={imgUrl} alt="card" className="w-[196px] h-[150px]" />
    <div className="absolute left-[10%] bottom-5">
      <div className="flex items-center mb-2">
        <div className="relative w-[54px] h-[24px]">
          <img
            src="people-04.svg"
            alt="people"
            className="absolute w-[24px] h-[24px] z-30"
          />
          <img
            src="people-05.svg"
            alt="people"
            className="absolute w-[24px] h-[24px] left-[11px] z-20"
          />
          <img
            src="people-06.svg"
            alt="people"
            className="absolute w-[24px] h-[24px] left-[22px] z-10"
          />
        </div>
        <p className="text-[12px] text-white">+ 264 has joined</p>
      </div>
      <p className="font-bold text-[18px] text-white">{title}</p>
    </div>
  </div>
);

export default WorldCard;
