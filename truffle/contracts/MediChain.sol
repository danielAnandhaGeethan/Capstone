// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MediChain {
    string public name;

    mapping(address => string) public patientInfo;


    constructor() public {
        name = "medichain";
    }

    function pushData(string memory _cid) public {
        require(msg.sender != address(0));
        require(bytes(_cid).length > 0);

        address _addr = msg.sender;

        patientInfo[_addr] = _cid;
    }

    function getPatientInfo(address _paddress) public view returns (string memory) {
    
        return patientInfo[_paddress];
    }
}