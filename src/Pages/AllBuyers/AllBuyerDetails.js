import React from 'react';

const AllBuyerDetails = ({ buyers }) => {
    const { name, email } = buyers;
    return (
        <tr>
            <td class="px-4 py-3">{name}</td>
            <td class="px-4 py-3">{email}</td>
            <td class="px-4 py-3"><button type="submit">X</button></td>
            {/* <td class="px-4 py-3 text-lg text-gray-900">Free</td> */}
            {/* <td class="w-10 text-center">
                    <input name="plan" type="radio" />
                </td> */}
        </tr>
    );
};

export default AllBuyerDetails;