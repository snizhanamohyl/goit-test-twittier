import { PropTypes } from "prop-types";
import { Content, DropBtn, Dropdown, FilterOption } from "./Filter.styled";

export default function Filter({ handleFollowBtnClick, filterOptions, selectedValue }) {
    return <Dropdown>
        <DropBtn>{selectedValue ? selectedValue :'Select filter value'}</DropBtn>
        <Content>
            <FilterOption value={filterOptions.all} onClick={handleFollowBtnClick}>{ filterOptions.all}</FilterOption>
            <FilterOption value={filterOptions.follow} onClick={handleFollowBtnClick}>{filterOptions.follow}</FilterOption>
            <FilterOption value={filterOptions.followings} onClick={handleFollowBtnClick}>{ filterOptions.followings}</FilterOption>
        </Content>
    </Dropdown>
}

Filter.propTypes = {
    handleFollowBtnClick: PropTypes.func,
    selectedValue: PropTypes.string,
    filterOptions: PropTypes.shape({
        all: PropTypes.string,
        follow: PropTypes.string,
        followings: PropTypes.string,
    })
}
