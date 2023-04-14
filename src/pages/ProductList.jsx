import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Seeds</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Seasonal
            </Option>
            <Option>Winter</Option>
            <Option>Summer</Option>
            <Option>All seasoned</Option>
            <Option>Best Sellers</Option>
            <Option>Selective Region</Option>
            <Option>Flowers/ Decorative plants</Option>
            <Option>Herb Seeds</Option>
            <Option>Winter Flowers</Option>
            <Option> Summer Flowers </Option>

          </Select>
          <Select>
            <Option disabled selected>
              Colors
            </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Pink</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
            <Option>Orange</Option>
            <Option>Violet</Option>
            <Option>Mauve</Option>
          </Select>
          <Select> 
          <Option disabled selected>
            Flowers
          </Option>
          <Option>Ranunculus</Option>
          <Option>Ixia </Option>
          <Option>Tritonia</Option>
          <Option>Sparaxis</Option>
          <Option> Hedychium (Ginger Lily) Griffithianum</Option>
          <Option>NM - Candytuft - Iberis Amara White</Option>
          <Option>Celosia Plumosa Mix</Option>

          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Best Sellers</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
