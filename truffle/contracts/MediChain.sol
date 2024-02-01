// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MediChain {
    string public name;

    address[] public patientList;
    address[] public doctorList;

    mapping(address => Patient) public patientInfo;
    mapping(address => Doctor) public doctorInfo;
    mapping(address => uint) public designationInfo;

    struct Patient {
        string name;
        string email;
        uint age;
        string record;
        bool exists;
    }

    struct Doctor{
        string name;
        string email;
        bool exists;
    }

    constructor() public {
        name = "medichain";
    }

    function register(string memory _name, uint _age, uint _designation, string memory _email, string memory _hash) public {
        require(msg.sender != address(0));
        require(bytes(_name).length > 0);
        require(bytes(_email).length > 0);

        address _addr = msg.sender;
        
        require(!patientInfo[_addr].exists);
        require(!doctorInfo[_addr].exists);

        if(_designation == 1){
            require(_age > 0);
            require(bytes(_hash).length > 0);
            Patient storage pinfo = patientInfo[_addr];
            pinfo.name = _name;
            pinfo.email = _email;
            pinfo.age = _age;
            pinfo.record = _hash;
            pinfo.exists = true;
            patientList.push(_addr);
            designationInfo[_addr] = _designation;
        } else if(_designation == 2){
            Doctor storage dinfo = doctorInfo[_addr];
            dinfo.name = _name;
            dinfo.email = _email;
            dinfo.exists = true;
            doctorList.push(_addr);
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

    /*
    function getPatientData(address _addr) public view returns(Patient memory){
        return patientInfo[_addr];
    }

    function getDoctorData(address _addr) public view returns(Doctor memory){
        return doctorInfo[_addr];
    }
    */

}