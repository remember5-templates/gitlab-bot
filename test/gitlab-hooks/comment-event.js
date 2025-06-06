/**
 * GitLab Release Hook事件测试用例
 */
module.exports = {
  headers:{
    "Content-Type": "application/json",
    "User-Agent": "GitLab/17.11.1-ee",
    "Idempotency-Key": "9db5a20d-3bbb-416d-a265-c095052a9348",
    "X-Gitlab-Event": "Note Hook",
    "X-Gitlab-Webhook-UUID": "c764a944-82c2-4044-9213-ec5b89d12778",
    "X-Gitlab-Instance": "https://hellogitlab.top",
    "X-Gitlab-Event-UUID": "0f490e30-2db8-4091-91a1-52fe67960342"
  },
  body: {
    "object_kind": "note",
    "event_type": "note",
    "user": {
      "id": 1,
      "name": "Administrator",
      "username": "root",
      "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon",
      "email": "admin@example.com"
    },
    "project_id": 5,
    "project":{
      "id": 5,
      "name":"Gitlab Test",
      "description":"Aut reprehenderit ut est.",
      "web_url":"http://example.com/gitlabhq/gitlab-test",
      "avatar_url":null,
      "git_ssh_url":"git@example.com:gitlabhq/gitlab-test.git",
      "git_http_url":"http://example.com/gitlabhq/gitlab-test.git",
      "namespace":"GitlabHQ",
      "visibility_level":20,
      "path_with_namespace":"gitlabhq/gitlab-test",
      "default_branch":"master",
      "homepage":"http://example.com/gitlabhq/gitlab-test",
      "url":"http://example.com/gitlabhq/gitlab-test.git",
      "ssh_url":"git@example.com:gitlabhq/gitlab-test.git",
      "http_url":"http://example.com/gitlabhq/gitlab-test.git"
    },
    "repository":{
      "name": "Gitlab Test",
      "url": "http://example.com/gitlab-org/gitlab-test.git",
      "description": "Aut reprehenderit ut est.",
      "homepage": "http://example.com/gitlab-org/gitlab-test"
    },
    "object_attributes": {
      "id": 1243,
      "note": "This is a commit comment. How does this work?",
      "noteable_type": "Commit",
      "author_id": 1,
      "created_at": "2015-05-17 18:08:09 UTC",
      "updated_at": "2015-05-17 18:08:09 UTC",
      "project_id": 5,
      "attachment":null,
      "line_code": "bec9703f7a456cd2b4ab5fb3220ae016e3e394e3_0_1",
      "commit_id": "cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
      "noteable_id": null,
      "system": false,
      "st_diff": {
        "diff": "--- /dev/null\n+++ b/six\n@@ -0,0 +1 @@\n+Subproject commit 409f37c4f05865e4fb208c771485f211a22c4c2d\n",
        "new_path": "six",
        "old_path": "six",
        "a_mode": "0",
        "b_mode": "160000",
        "new_file": true,
        "renamed_file": false,
        "deleted_file": false
      },
      "action": "create",
      "url": "http://example.com/gitlab-org/gitlab-test/commit/cfe32cf61b73a0d5e9f13e774abde7ff789b1660#note_1243"
    },
    "commit": {
      "id": "cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
      "message": "Add submodule\n\nSigned-off-by: Example User \u003cuser@example.com.com\u003e\n",
      "timestamp": "2014-02-27T10:06:20+02:00",
      "url": "http://example.com/gitlab-org/gitlab-test/commit/cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
      "author": {
        "name": "Example User",
        "email": "user@example.com"
      }
    }
  }
}
