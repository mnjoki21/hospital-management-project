class Doctor < ActiveRecord::Base
    has many : Patients
    has many : Ailments, through: : Patients

    
end