
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