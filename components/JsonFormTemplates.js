

export function ObjectFieldTemplate(props) {
    return (
        <div>
            {props.title != "none" && <strong>{props.title}</strong>}
            <div className="custom-object">
                {props.description}
                {props.properties.map((element, key) => {
                    return (
                        // <div className="property-wrapper">{element.content}</div>
                        <div key={key} className="custom-object-item">{element.content}</div>
                    )
                })}

                <style global jsx>{`

                .one-line .custom-object{
                    display: flex;
                    justify-content: space-between;
                }

                .one-line .custom-object-item{
                    display: inline;
                    width: 100%;
                    margin: 2px;
                }

            `}</style>
            </div>
        </div>
    );
}

export function FieldTemplate(props) {
    const { id, classNames, label, help, required, description, errors, children } = props;
    return (
        <div className={classNames}>
            <label htmlFor={id}>{label}{required ? "*" : null}</label>
            {description}
            <div className="row">
                <div className="col-12 custom-field">
                    {children}
                </div>
            </div>
            {errors}
            {help}

            <style global jsx>{`

                .custom-field ul{
                    display: flex;
                    justify-content: space-between;
                }

                .custom-field li{
                    display: inline;
                    width: 100%;
                    margin: 2px;
                }

            `}</style>
        </div>
    );
}