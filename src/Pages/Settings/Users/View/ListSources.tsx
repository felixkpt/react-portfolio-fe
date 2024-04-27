class ListSources {
  public rolesListArray: string[]
  public directPermissionsListArray: string[]
  public issueSourceListArray: string[]
  public dispositionListArray: string[]

  constructor() {
    this.rolesListArray = [];
    this.directPermissionsListArray = [];
    this.issueSourceListArray = [];
    this.dispositionListArray = [];
  }

  async rolesList() {
    const res = await getRoles('settings/role-permissions/roles?all=1');
    this.rolesListArray.push(res);
    return this;
  }

  async directPermissionsList() {
    const res = await getRoles('settings/role-permissions/permissions?all=1');
    this.directPermissionsListArray.push(res);
    return this;
  }

  async issueSourceList() {
    const res = await getRoles('settings/picklists/tickets/issuesources?all=1');
    this.issueSourceListArray.push(res);
    return this;
  }

  async dispositionList() {
    const res = await getRoles('settings/role-permissions/permissions?all=1');
    this.dispositionListArray.push(res);
    return this;
  }

  get(key: string) {
    return this[`${key}Array`];
  }

  getDependencies(key: string) {
    switch (key) {
      case 'rolesList':
        return ['directPermissionsList'];
      case 'directPermissionsList':
        return ['issueSourceList'];
      case 'issueSourceList':
        return ['dispositionList'];
      default:
        return [];
    }
  }

}


export default ListSources