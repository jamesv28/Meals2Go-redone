import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { SearchView } from "./search.styles";
import { LocationContext } from "../../../../services/location/location.context";

const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  return (
    <SearchView>
      <Searchbar
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};

export default SearchComponent;
