import React from "react";

// import images

const Home = props => {
    return (
        <body className="main">
            {/* ---------- header ---------- */}
            <div id="header">
              
                <div className="gnb">
                    <div className="wrap">
                        <em className="line1"></em>
                        <a href="./deposit">입금신청</a>
                        <a href="./withdraw">출금신청</a>
                        <em className="line2"></em>
                    </div>
                </div>
            </div>
            {/* ---------- // header ---------- */}

        </body>
    );
}

export default Home;