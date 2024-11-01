import backgroundImage from '../assets/pexels-vie-studio-8148587.jpg';

const Home = () => {
  const handleShopping = () => {
    window.location.href = '/signin';
  }

  return (
    <>
    <div style={{display:"flex", padding:"1%"}}>
        <p
            style={{
                fontSize: "1.4rem",
                lineHeight: "1.8",
                color: "#3a6073",
                padding: "0 20px",
                maxWidth: "600px",
                margin: "10% auto",
                textAlign: "center",
            }}
        >
            Welcome to <strong>Shopping List</strong> – a beautifully designed and user-friendly app that makes managing your shopping needs easier and more enjoyable. With our app, you can organize your shopping tasks effortlessly, ensuring you never miss an item again. Our app simplifies shopping by letting you focus on the essentials. Say goodbye to the hassle of forgetting items or misplacing your list! Whether it’s grocery shopping, planning a party, or managing a holiday shopping spree, this Shopping List helps you stay prepared, stress-free, and organized.
            <br /><br />
            <strong>Get started now and take control of your shopping experience with ease and style!</strong>
        </p>
       
        <div
            className="homePage"
            style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            height: "900px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#3a6073",
            textAlign: "center",
            padding: "20px",
            }}
        >
            <h1
                style={{
                fontSize: "5rem",
                fontWeight: "bold",
                background: "linear-gradient(to right, #3a6073, #a8c0b4)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    marginBottom: "20px",
                }}
                >
                Shopping List
            </h1>

            <button
            onClick={handleShopping}
            style={{
                padding: "15px 30px",
                fontSize: "1.2rem",
                color: "#fff",
                backgroundColor: "#3a6073",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                marginBottom: "40px",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#a8c0b4")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#3a6073")}
            >
            Write Your Own
            </button>
        </div>
            {/* <hr style={{ margin: "40px 0", borderColor: "#3a6073" }} /> */}
    </div>
    </>
  );
};

export default Home;
