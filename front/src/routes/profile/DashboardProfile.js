import PageLayout from '../../components/layout/page';

const DashboardProfile = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Profile</h1>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card card-profile">
                <div class="card-header" style="background-image: url();" />
                { props.user &&
              <div class="card-body text-center">
                <img class="card-profile-img" src={props.user.profile_url || '/assets/images/undraw_profile_pic.svg'} />
                <h3 class="mb-3">{props.user.name}</h3>
                <p class="mb-4">
                  {props.user.role === 'admin' ? 'Administrator' : 'User' }
                </p>
                
              </div>
                }
              </div>
            </div>
            <div class="col-md-8">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Edit your Profile</h3>
                </div>
                { props.user &&
            <div class="card-body">
              <form onSubmit={props.saveUser}>
                { props.profileUpdatePasswordNotMatching &&
                  <div class="alert alert-danger" role="alert">
                    Password are not matching
                  </div>
                }

                { props.profileUpdatePasswordTooShort &&
                  <div class="alert alert-danger" role="alert">
                    Password too short
                  </div>
                }

                { props.userSavedSuccess === true &&
                  <div class="alert alert-success" role="alert">
                    Profile saved with success!
                  </div>
                }

                { props.userSavedSuccess === false &&
                  <div class="alert alert-danger" role="alert">
                    There was an error while updating your profile
                  </div>
                }

                <div class="form-group">
                  <label class="form-label">Firstname</label>
                  <input class="form-control" placeholder="Your Firstname" value={props.newUser.firstname} onChange={props.updateFirstname} />
                </div>
                <div class="form-group">
                  <label class="form-label">Lastname</label>
                  <input class="form-control" placeholder="Your Lastname" value={props.newUser.lastname} onChange={props.updateLastname} />
                </div>
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input class="form-control" placeholder="Email" value={props.newUser.email} onChange={props.updateEmail}  />
                </div>
                <div class="form-group">
                  <label class="form-label">Language</label>
                  <select value={props.newUser.language} class="form-control" onChange={props.updateLanguage}>
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" placeholder="New password (min 8 characters)"  value={props.newUser.newPassword} onChange={props.updateNewPassword}  />
                </div>
                <div class="form-group">
                  <label class="form-label">Repeat password</label>
                  <input type="password" class="form-control" placeholder="New password (min 8 characters)"  value={props.newUser.newPasswordRepeat} onChange={props.updateNewPasswordRepeat}  />
                </div>
                <div class="form-footer">
                  <button class="btn btn-primary btn-block">Save</button>
                </div>
              </form>
            </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardProfile;
