import dayjs from 'dayjs';

const Header = () => {
    const formattedDate = dayjs().format('MMMM D, YYYY');
    const day = dayjs().format('dddd,');
    return (
        <>
            <div className="flex items-center flex-col gap-4">
                <div >
                    <img src="/assets/logo.png" alt="" />
                </div>       
                <p className="text-gray-500">Journalism Without Fear or Favour</p>
                <p><b>{day}</b> {formattedDate}</p>
            </div>

        </>
    );
};

export default Header;