const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit} className="form">
            <div className="form-element">
                <input type="email" name="email" value={props.email} placeholder="Enter you email" onChange={props.onChange} className="input" />
            </div>
            <div className="form-element">
                <input type="password" name="password" value={props.password} placeholder="Enter you password" onChange={props.onChange} className="input"/>
            </div>
            <div className="form-element">
                <input type="submit" value="Submit" className="btn"></input>
            </div>
        </form>
    );
}

export default Form;