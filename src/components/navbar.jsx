function NavBar(){
    return(
        <nav className="navbar bg-primary-subtle shadow-sm">
            <div className="container-fluid row">
                <a className="navbar-brand col">한국어 단어 의미 연결망</a>
                <div id="search_form" className="container-fluid col-md-auto">
                    <form className="d-flex">
                        <input type="text" className="form-control me-2" id="wordInput" placeholder="단어찾기"></input>
                        <button id="searchButton" type="button" className="btn btn-primary col-sm-auto">검색</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;