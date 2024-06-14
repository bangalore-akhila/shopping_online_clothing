import CategoryItem from '../category-items/index';
import './main_container.styles.scss';

const CategoryContainer = ({categories}) => {
return <div className="categories-container">
{
        categories.map((category) => {
         return <CategoryItem key={category.id} category={category} />
        } )
      }
</div>
}

export default CategoryContainer;