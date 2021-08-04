import formatDate from "../utils/formateDate";

const Date = ({ date }: any) => (
  <small className="date tracking-tighter">{formatDate(date)}</small>
)

export default Date;
