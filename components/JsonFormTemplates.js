

export function ObjectFieldTemplate(props) {


    let title = props.title;

    if (typeof title == 'undefined') {
        title = 'none'
    }

    let title_splited = title.split('-');

    if (title_splited[0] == 'object') {
        title = title_splited[1];
    }

    return (
        <div>
            {title != "none" && <strong>{title}</strong>}
            <div className="custom-object">
                {props.description}
                {props.properties.map((element, key) => {
                    return (
                        // <div className="property-wrapper">{element.content}</div>
                        <div key={key} className="custom-object-item">{element.content}</div>
                    )
                })}

                <style global jsx>{`

                .custom-object label{
                        margin-bottom: 0px;
                        color: gray;
                   }

                /* only for mobile */
                @media only screen and (max-width: 768px){
                   .custom-object input{
                        margin-bottom: -10px;
                   }
                }

                {/*  works only more then 768 px on md screens */}
                @media only screen and (min-width: 768px){

                    .one-line{
                        margin-top: -15px;
                    }

                    .one-line .custom-object{
                        display: flex;
                        justify-content: space-between;
                    }

                    .one-line .custom-object-item{
                        display: inline;
                        width: 100%;
                        margin: 2px;
                    }
                }
            `}</style>
            </div>
        </div>
    );
}

export function FieldTemplate(props) {
    const { id, label, required, children, classNames } = props;

    let new_label = label;

    if (typeof new_label == 'undefined') {
        new_label = 'none'
    }

    let label_splited = new_label.split('-');

    return (
        <div className={classNames}>

            {label != 'none' && label_splited[0] != 'object' && <label htmlFor={id}>{label}{required ? "*" : null}</label>}
            {children}

            <style global jsx>{`
                
            // label{
            //     font-size: 9pt !important;
            // }

            `}</style>

        </div>
    );
}

// export function FieldTemplate(props) {
//     const { id, classNames, label, help, required, description, errors, children } = props;
//     return (
//         <div className={classNames}>
//             {label != 'none' && <label htmlFor={id}>{label}{required ? "*" : null}</label>}
//             {description}
//             <div className="row">
//                 <div className="col-12 custom-field">
//                     {children}
//                 </div>
//             </div>
//             {errors}
//             {help}

//             <style global jsx>{`

//                 label{
//                     font-size: 7pt;
//                 }

//                 .custom-field ul{
//                     display: flex;
//                     justify-content: space-between;
//                 }

//                 .custom-field li{
//                     display: inline;
//                     width: 100%;
//                     margin: 2px;
//                 }

//             `}</style>
//         </div>
//     );
// }