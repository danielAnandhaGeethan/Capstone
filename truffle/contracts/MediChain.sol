// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MediChain {
    string public name;

    //address[] public patientList;
    //address[] public doctorList;

    mapping(address => Patient) public patientInfo;
    mapping(address => Doctor) public doctorInfo;
    mapping(address => uint) public designationInfo;

    struct Patient {
        string name;
        uint age;
        bool exists;
    }

    struct Doctor{
        string name;
        uint age;
        bool exists;
    }

    constructor() public {
        name = "medichain";
    }

    function register(string memory _name, uint _age, uint _designation) public {
        require(msg.sender != address(0));
        require(bytes(_name).length > 0);

        address _addr = msg.sender;

        if(_designation == 1){
            require(_age > 0);
            Patient storage pinfo = patientInfo[_addr];
            pinfo.name = _name;
            pinfo.age = _age;
            pinfo.exists = true;
            designationInfo[_addr] = _designation;
        } else if(_designation == 2){
            Doctor storage dinfo = doctorInfo[_addr];
            dinfo.name = _name;
            dinfo.exists = true;
            designationInfo[_addr] = _designation;
        } else {
            revert();
        }
    }

    function login(address _addr) public view returns(uint){
        if(patientInfo[_addr].exists){
            return 1;
        } else if(doctorInfo[_addr].exists){
            return 2;
        } else{
            return 0;
        }
    }
}