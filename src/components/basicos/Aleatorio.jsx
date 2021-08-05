export default (props) => 
    parseInt(Math.random() * (props.max - props.min)) + props.min
