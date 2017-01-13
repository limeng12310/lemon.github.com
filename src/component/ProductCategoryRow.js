/**
 * Created by limengsi3299 on 2017/1/13.
 */
class ProductCategoryRow extends React.Component{
    render() {
        return (
            <tr><th colSpan="2">{this.props.category}</th></tr>
        );
    }
}

export default ProductCategoryRow;