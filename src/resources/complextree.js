export const dqMultiLevelTree = {
  items: {
    root: {
      index: "root",
      canMove: true,
      hasChildren: true,
      children: ["Elements"],
      data: "root",
      canRename: true
    },
    // level 1
    Elements: {
      index: "Elements",
      canMove: true,
      hasChildren: true,
      children: ["Habitat", "Transfer_Vehicle", "branch1"],
      // "Transfer_Vehicle.transfer_vehicle_power_sink.transfer_vehicle_power_sink_basic_dry_mass",
      // "Transfer_Vehicle.transfer_vehicle_power_sink.transfer_vehicle_power_sink_mga_mass",
      // "Transfer_Vehicle.transfer_vehicle_power_sink.transfer_vehicle_power_sink_predicted_dry_mass",
      // "Transfer_Vehicle.transfer_vehicle_power_sink.transfer_vehicle_power_sink_other_predicted_inert_mass_history",
      // "Transfer_Vehicle.transfer_vehicle_power_sink.transfer_vehicle_power_sink_predicted_inert_mass_history",
      // "Transfer_Vehicle.transfer_vehicle_power_sink.transfer_vehicle_power_sink_gross_mass_history",
      // "Transfer_Vehicle.solar_arrays.solar_arrays_basic_dry_mass",
      // "Transfer_Vehicle.solar_arrays.solar_arrays_mga_mass",
      // "Transfer_Vehicle.solar_arrays.solar_arrays_predicted_dry_mass",
      // "Transfer_Vehicle.solar_arrays.solar_arrays_other_predicted_inert_mass_history",
      // "Transfer_Vehicle.solar_arrays.solar_arrays_predicted_inert_mass_history",
      // "Transfer_Vehicle.solar_arrays.solar_arrays_gross_mass_history",
      // "Transfer_Vehicle.utility.Transfer_Vehicle_gross_mass_history",
      // "Transfer_Vehicle.utility.Transfer_Vehicle_basic_dry_mass",
      // "Transfer_Vehicle.utility.Transfer_Vehicle_mga_mass",
      // "Transfer_Vehicle.utility.Transfer_Vehicle_predicted_dry_mass",
      // "Transfer_Vehicle.utility.Transfer_Vehicle_predicted_inert_mass_history",
      // "Transfer_Vehicle.utility.Transfer_Vehicle_margin_mass",
      // "branch1.earth_operations_virtual_stage.earth_operations_gross_mass_history",
      // "branch1.earth_operations_virtual_stage.earth_operations_active_gross_mass_history",
      // "branch1.mars_operations_virtual_stage.mars_operations_gross_mass_history",
      // "branch1.mars_operations_virtual_stage.mars_operations_active_gross_mass_history",
      // "branch1.earth_return_operations_virtual_stage.earth_return_operations_gross_mass_history",
      // "branch1.earth_return_operations_virtual_stage.earth_return_operations_active_gross_mass_history"
      // ],
      data: "Elements",
      canRename: true
    },
    // level 2
    Habitat: {
      index: "Habitat",
      canMove: true,
      hasChildren: true,
      children: ["habitat_power_sink", "solar_arrays", "utility"],
      data: "Habitat",
      canRename: true
    },
    Transfer_Vehicle: {
      index: "Transfer_Vehicle",
      canMove: true,
      hasChildren: true,
      children: ["transfer_vehicle_power_sink", "solar_arrays_2", "utility_2"],
      data: "Transfer_Vehicle",
      canRename: true
    },
    branch1: {
      index: "branch1",
      canMove: true,
      hasChildren: true,
      children: [
        "earth_operations",
        "mars_operations",
        "earth_return_operations"
      ],
      data: "branch1",
      canRename: true
    },
    // level 3
    habitat_power_sink: {
      index: "habitat_power_sink",
      canMove: true,
      hasChildren: true,
      children: [
        "habitat_power_sink_basic_dry_mass",
        "habitat_power_sink_mga_mass",
        "habitat_power_sink_predicted_dry_mass",
        "habitat_power_sink_other_predicted_inert_mass_history",
        "habitat_power_sink_predicted_inert_mass_history",
        "habitat_power_sink_gross_mass_history"
      ],
      data: "habitat_power_sink",
      canRename: true
    },
    solar_arrays: {
      index: "solar_arrays",
      canMove: true,
      hasChildren: true,
      children: [
        "solar_arrays_basic_dry_mass",
        "solar_arrays_mga_mass",
        "solar_arrays_predicted_dry_mass",
        "solar_arrays_other_predicted_inert_mass_history",
        "solar_arrays_predicted_inert_mass_history",
        "solar_arrays_gross_mass_history"
      ],
      data: "solar_arrays",
      canRename: true
    },
    utility: {
      index: "utility",
      canMove: true,
      hasChildren: true,
      children: [
        "Habitat_gross_mass_history",
        "Habitat_basic_dry_mass",
        "Habitat_mga_mass",
        "Habitat_predicted_dry_mass",
        "Habitat_predicted_inert_mass_history",
        "Habitat_margin_mass"
      ],
      data: "utility",
      canRename: true
    },
    transfer_vehicle_power_sink: {
      index: "transfer_vehicle_power_sink",
      canMove: true,
      hasChildren: true,
      children: [
        "transfer_vehicle_power_sink_basic_dry_mass",
        "transfer_vehicle_power_sink_mga_mass",
        "transfer_vehicle_power_sink_predicted_dry_mass",
        "transfer_vehicle_power_sink_other_predicted_inert_mass_history",
        "transfer_vehicle_power_sink_predicted_inert_mass_history",
        "transfer_vehicle_power_sink_gross_mass_history"
      ],
      data: "transfer_vehicle_power_sink",
      canRename: true
    },
    solar_arrays_2: {
      index: "solar_arrays_2",
      canMove: true,
      hasChildren: true,
      children: [
        "solar_arrays_basic_dry_mass",
        "solar_arrays_mga_mass",
        "solar_arrays_predicted_dry_mass",
        "solar_arrays_other_predicted_inert_mass_history",
        "solar_arrays_predicted_inert_mass_history",
        "solar_arrays_gross_mass_history"
      ],
      data: "solar_arrays",
      canRename: true
    },
    utility_2: {
      index: "utility_2",
      canMove: true,
      hasChildren: true,
      children: [
        "Transfer_Vehicle_gross_mass_history",
        "Transfer_Vehicle_basic_dry_mass",
        "Transfer_Vehicle_mga_mass",
        "Transfer_Vehicle_predicted_dry_mass",
        "Transfer_Vehicle_predicted_inert_mass_history",
        "Transfer_Vehicle_margin_mass"
      ],
      data: "utility",
      canRename: true
    },
    earth_operations: {
      index: "earth_operations",
      canMove: true,
      hasChildren: false, // true,
      // children: [
      // ],
      data: "earth_operations",
      canRename: true
    },
    mars_operations: {
      index: "mars_operations",
      canMove: true,
      hasChildren: false, // true,
      // children: [
      // ],
      data: "mars_operations",
      canRename: true
    },
    earth_return_operations: {
      index: "earth_return_operations",
      canMove: true,
      hasChildren: false, // true,
      // children: [
      // ],
      data: "earth_return_operations",
      canRename: true
    },
    // level 4
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
    solar_arrays_basic_dry_mass: {
      index: "solar_arrays_basic_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_basic_dry_mass",
      canRename: true
    },
    solar_arrays_mga_mass: {
      index: "solar_arrays_mga_mass",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_mga_mass",
      canRename: true
    },
    solar_arrays_predicted_dry_mass: {
      index: "solar_arrays_predicted_dry_mass",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_predicted_dry_mass",
      canRename: true
    },
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
    solar_arrays_basic_dry_mass_2: {
      index: "solar_arrays_basic_dry_mass_2",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_basic_dry_mass_2",
      canRename: true
    },
    solar_arrays_mga_mass_2: {
      index: "solar_arrays_mga_mass_2",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_mga_mass_2",
      canRename: true
    },
    solar_arrays_predicted_dry_mass_2: {
      index: "solar_arrays_predicted_dry_mass_2",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_predicted_dry_mass_2",
      canRename: true
    },
    solar_arrays_other_predicted_inert_mass_history_2: {
      index: "solar_arrays_other_predicted_inert_mass_history_2",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_other_predicted_inert_mass_history_2",
      canRename: true
    },
    solar_arrays_predicted_inert_mass_history_2: {
      index: "solar_arrays_predicted_inert_mass_history_2",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_predicted_inert_mass_history_2",
      canRename: true
    },
    solar_arrays_gross_mass_history_2: {
      index: "solar_arrays_gross_mass_history_2",
      canMove: true,
      hasChildren: false,
      data: "solar_arrays_gross_mass_history_2",
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
    }
  }
};
