'use client'

import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Select, SelectItem } from '@heroui/select';

const FilterBy = ({ category, apparelCategories }) => {
    const [value, setValue] = useState(category);
    const { replace } = useRouter();

    const handleSelectionChange = (e) => {
        setValue(e.target.value);
        replace(`/shop/${e.target.value}`)
    };

    return (
        <Select
            label="Filter by:"
            variant="bordered"
            selectedKeys={[value]}
            size="sm"
            color="secondary"
            className="w-1/2 font-semibold pt-3 sm:pt-0"
            onChange={handleSelectionChange}
        >
            <SelectItem key={[]} value={[]} className="italic">
                No Filter
            </SelectItem>
            
            {apparelCategories.map(({ name }) => (
                <SelectItem key={name}>
                    {name}
                </SelectItem>
            ))}
        </Select>
    );
}

export default FilterBy;