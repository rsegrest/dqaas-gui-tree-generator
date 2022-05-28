export const brokenTree = {
  items: {
    root: {
      index: "root",
      canMove: true,
      hasChildren: true,
      data: "root",
      canRename: true,
      children: ["Elements"]
    },
    Elements: {
      index: "Elements",
      canMove: true,
      hasChildren: true,
      children: ["Habitat", "Transfer_Vehicle", "branch1"],
      data: "Elements",
      canRename: true
    },
    Habitat: {
      index: "Habitat",
      canMove: true,
      hasChildren: true,
      data: "Habitat",
      canRename: true,
      children: ["habitat_power_sink", "solar_arrays", "utility"]
    },
    habitat_power_sink: {
      index: "habitat_power_sink",
      canMove: true,
      hasChildren: true,
      data: "habitat_power_sink",
      canRename: true,
      children: [
        "habitat_power_sink_basic_dry_mass",
        "habitat_power_sink_mga_mass",
        "habitat_power_sink_predicted_dry_mass",
        "habitat_power_sink_other_predicted_inert_mass_history",
        "habitat_power_sink_predicted_inert_mass_history",
        "habitat_power_sink_gross_mass_history"
      ]
    },
    habitat_power_sink_basic_dry_mass: {
      index: "habitat_power_sink_basic_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "habitat_power_sink_basic_dry_mass",
      canRename: true
    },
    habitat_power_sink_mga_mass: {
      index: "habitat_power_sink_mga_mass",
      canMove: true,
      hasChildren: false,
      data: "habitat_power_sink_mga_mass",
      canRename: true
    },
    habitat_power_sink_predicted_dry_mass: {
      index: "habitat_power_sink_predicted_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "habitat_power_sink_predicted_dry_mass",
      canRename: true
    },
    habitat_power_sink_other_predicted_inert_mass_history: {
      index: "habitat_power_sink_other_predicted_inert_mass_history",
      canMove: true,
      hasChildren: false,
      data: "habitat_power_sink_other_predicted_inert_mass_history",
      canRename: true
    },
    habitat_power_sink_predicted_inert_mass_history: {
      index: "habitat_power_sink_predicted_inert_mass_history",
      canMove: true,
      hasChildren: false,
      data: "habitat_power_sink_predicted_inert_mass_history",
      canRename: true
    },
    habitat_power_sink_gross_mass_history: {
      index: "habitat_power_sink_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "habitat_power_sink_gross_mass_history",
      canRename: true
    },
    solar_arrays: {
      index: "solar_arrays",
      canMove: true,
      hasChildren: false, // true,
      data: "solar_arrays",
      canRename: true
      // children: [
      // "solar_arrays_basic_dry_mass",
      // "solar_arrays_mga_mass",
      // "solar_arrays_predicted_dry_mass",
      // "solar_arrays_other_predicted_inert_mass_history",
      // "solar_arrays_predicted_inert_mass_history",
      // "solar_arrays_gross_mass_history"
      // ]
    },
    // solar_arrays_basic_dry_mass: {
    //   index: "solar_arrays_basic_dry_mass",
    //   canMove: true,
    //   hasChildren: false,
    //   data: "solar_arrays_basic_dry_mass",
    //   canRename: true
    // },
    // solar_arrays_mga_mass: {
    //   index: "solar_arrays_mga_mass",
    //   canMove: true,
    //   hasChildren: false,
    //   data: "solar_arrays_mga_mass",
    //   canRename: true
    // },
    // solar_arrays_predicted_dry_mass: {
    //   index: "solar_arrays_predicted_dry_mass",
    //   canMove: true,
    //   hasChildren: false,
    //   data: "solar_arrays_predicted_dry_mass",
    //   canRename: true
    // },
    solar_arrays_other_predicted_inert_mass_history: {
      index: "solar_arrays_other_predicted_inert_mass_history",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_other_predicted_inert_mass_history",
      canRename: true
    },
    solar_arrays_predicted_inert_mass_history: {
      index: "solar_arrays_predicted_inert_mass_history",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_predicted_inert_mass_history",
      canRename: true
    },
    solar_arrays_gross_mass_history: {
      index: "solar_arrays_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_gross_mass_history",
      canRename: true
    },
    utility: {
      index: "utility",
      canMove: true,
      hasChildren: true,
      data: "utility",
      canRename: true,
      children: [
        "Transfer_Vehicle_gross_mass_history",
        "Transfer_Vehicle_basic_dry_mass",
        "Transfer_Vehicle_mga_mass",
        "Transfer_Vehicle_predicted_dry_mass",
        "Transfer_Vehicle_predicted_inert_mass_history",
        "Transfer_Vehicle_margin_mass"
      ]
    },
    Habitat_gross_mass_history: {
      index: "Habitat_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "Habitat_gross_mass_history",
      canRename: true
    },
    Habitat_basic_dry_mass: {
      index: "Habitat_basic_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "Habitat_basic_dry_mass",
      canRename: true
    },
    Habitat_mga_mass: {
      index: "Habitat_mga_mass",
      canMove: true,
      hasChildren: false,
      data: "Habitat_mga_mass",
      canRename: true
    },
    Habitat_predicted_dry_mass: {
      index: "Habitat_predicted_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "Habitat_predicted_dry_mass",
      canRename: true
    },
    Habitat_predicted_inert_mass_history: {
      index: "Habitat_predicted_inert_mass_history",
      canMove: true,
      hasChildren: false,
      data: "Habitat_predicted_inert_mass_history",
      canRename: true
    },
    Habitat_margin_mass: {
      index: "Habitat_margin_mass",
      canMove: true,
      hasChildren: false,
      data: "Habitat_margin_mass",
      canRename: true
    },
    Transfer_Vehicle: {
      index: "Transfer_Vehicle",
      canMove: true,
      hasChildren: true,
      data: "Transfer_Vehicle",
      canRename: true,
      children: ["transfer_vehicle_power_sink", "solar_arrays", "utility"]
    },
    transfer_vehicle_power_sink: {
      index: "transfer_vehicle_power_sink",
      canMove: true,
      hasChildren: true,
      data: "transfer_vehicle_power_sink",
      canRename: true,
      children: [
        "transfer_vehicle_power_sink_basic_dry_mass",
        "transfer_vehicle_power_sink_mga_mass",
        "transfer_vehicle_power_sink_predicted_dry_mass",
        "transfer_vehicle_power_sink_other_predicted_inert_mass_history",
        "transfer_vehicle_power_sink_predicted_inert_mass_history",
        "transfer_vehicle_power_sink_gross_mass_history"
      ]
    },
    transfer_vehicle_power_sink_basic_dry_mass: {
      index: "transfer_vehicle_power_sink_basic_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "transfer_vehicle_power_sink_basic_dry_mass",
      canRename: true
    },
    transfer_vehicle_power_sink_mga_mass: {
      index: "transfer_vehicle_power_sink_mga_mass",
      canMove: true,
      hasChildren: false,
      data: "transfer_vehicle_power_sink_mga_mass",
      canRename: true
    },
    transfer_vehicle_power_sink_predicted_dry_mass: {
      index: "transfer_vehicle_power_sink_predicted_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "transfer_vehicle_power_sink_predicted_dry_mass",
      canRename: true
    },
    transfer_vehicle_power_sink_other_predicted_inert_mass_history: {
      index: "transfer_vehicle_power_sink_other_predicted_inert_mass_history",
      canMove: true,
      hasChildren: false,
      data: "transfer_vehicle_power_sink_other_predicted_inert_mass_history",
      canRename: true
    },
    transfer_vehicle_power_sink_predicted_inert_mass_history: {
      index: "transfer_vehicle_power_sink_predicted_inert_mass_history",
      canMove: true,
      hasChildren: false,
      data: "transfer_vehicle_power_sink_predicted_inert_mass_history",
      canRename: true
    },
    transfer_vehicle_power_sink_gross_mass_history: {
      index: "transfer_vehicle_power_sink_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "transfer_vehicle_power_sink_gross_mass_history",
      canRename: true
    },
    Transfer_Vehicle_gross_mass_history: {
      index: "Transfer_Vehicle_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "Transfer_Vehicle_gross_mass_history",
      canRename: true
    },
    Transfer_Vehicle_basic_dry_mass: {
      index: "Transfer_Vehicle_basic_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "Transfer_Vehicle_basic_dry_mass",
      canRename: true
    },
    Transfer_Vehicle_mga_mass: {
      index: "Transfer_Vehicle_mga_mass",
      canMove: true,
      hasChildren: false,
      data: "Transfer_Vehicle_mga_mass",
      canRename: true
    },
    Transfer_Vehicle_predicted_dry_mass: {
      index: "Transfer_Vehicle_predicted_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "Transfer_Vehicle_predicted_dry_mass",
      canRename: true
    },
    Transfer_Vehicle_predicted_inert_mass_history: {
      index: "Transfer_Vehicle_predicted_inert_mass_history",
      canMove: true,
      hasChildren: false,
      data: "Transfer_Vehicle_predicted_inert_mass_history",
      canRename: true
    },
    Transfer_Vehicle_margin_mass: {
      index: "Transfer_Vehicle_margin_mass",
      canMove: true,
      hasChildren: false,
      data: "Transfer_Vehicle_margin_mass",
      canRename: true
    },
    branch1: {
      index: "branch1",
      canMove: true,
      hasChildren: true,
      data: "branch1",
      canRename: true,
      children: [
        "earth_operations_virtual_stage",
        "mars_operations_virtual_stage",
        "earth_return_operations_virtual_stage"
      ]
    },
    earth_operations_virtual_stage: {
      index: "earth_operations_virtual_stage",
      canMove: true,
      hasChildren: true,
      data: "earth_operations_virtual_stage",
      canRename: true,
      children: [
        "earth_operations_gross_mass_history",
        "earth_operations_active_gross_mass_history"
      ]
    },
    earth_operations_gross_mass_history: {
      index: "earth_operations_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "earth_operations_gross_mass_history",
      canRename: true
    },
    earth_operations_active_gross_mass_history: {
      index: "earth_operations_active_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "earth_operations_active_gross_mass_history",
      canRename: true
    },
    mars_operations_virtual_stage: {
      index: "mars_operations_virtual_stage",
      canMove: true,
      hasChildren: true,
      data: "mars_operations_virtual_stage",
      canRename: true,
      children: [
        "mars_operations_gross_mass_history",
        "mars_operations_active_gross_mass_history"
      ]
    },
    mars_operations_gross_mass_history: {
      index: "mars_operations_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "mars_operations_gross_mass_history",
      canRename: true
    },
    mars_operations_active_gross_mass_history: {
      index: "mars_operations_active_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "mars_operations_active_gross_mass_history",
      canRename: true
    },
    earth_return_operations_virtual_stage: {
      index: "earth_return_operations_virtual_stage",
      canMove: true,
      hasChildren: true,
      data: "earth_return_operations_virtual_stage",
      canRename: true,
      children: [
        "earth_return_operations_gross_mass_history",
        "earth_return_operations_active_gross_mass_history"
      ]
    },
    earth_return_operations_gross_mass_history: {
      index: "earth_return_operations_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "earth_return_operations_gross_mass_history",
      canRename: true
    },
    earth_return_operations_active_gross_mass_history: {
      index: "earth_return_operations_active_gross_mass_history",
      canMove: true,
      hasChildren: false,
      data: "earth_return_operations_active_gross_mass_history",
      canRename: true
    }
  }
};
