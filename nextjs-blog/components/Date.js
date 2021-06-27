import { parseISO, format } from "date-fns";

const Date = ({ dateString }) => {
	const date = parseISO(dateString);
	return (
		<time className={"date"} dateTime={dateString}>
			{format(date, "d LLLL, yyyy")}

			<style jsx>
				{`
					.date {
						background-color: #d8d8d8;
						border-radius: 5px;
						padding: 5px;
						color: rgb(43, 202, 242);
					}
				`}
			</style>
		</time>
	);
};

export default Date;
