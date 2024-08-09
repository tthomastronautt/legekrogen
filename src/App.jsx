import viteLogo from "@assets/react.svg";

function App() {
    const postSubscribers = async () => {
        const data = axiosInstance
            .post("subscribe", {
                name: "Anna",
                email: "anna2@gmail.com",
                message: "test",
            })
            .then((res) => res.data);
    };

    return (
        <>
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </>
    );
}

export default App;
