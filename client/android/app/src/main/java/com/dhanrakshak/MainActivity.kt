package com.dhanrakshak

import android.os.Build
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.provider.Settings
import expo.modules.ReactActivityDelegateWrapper
import android.content.Intent
import android.net.Uri
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.bridge.Arguments
import android.util.Log
import android.widget.Toast


class MainActivity : ReactActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    setTheme(R.style.AppTheme);
    super.onCreate(null)
     val serviceIntent = Intent(this, ForegroundService::class.java)

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        startForegroundService(serviceIntent)
    } else {
        startService(serviceIntent)
    }
    val number = intent?.getStringExtra("callerNumber")
    if (number != null) {
        val launchIntent = Intent(this, MainActivity::class.java).apply {
            putExtra("callerNumber", number)
        }
        setIntent(launchIntent)
    }
  }

override fun onNewIntent(intent: Intent) {
    super.onNewIntent(intent)
    setIntent(intent)

    val callerNumber = intent.getStringExtra("callerNumber")
    Log.d("MainActivity", "onNewIntent received callerNumber: $callerNumber")
    if (callerNumber != null) {
        Log.d("MainActivity", "onNewIntent received callerNumber: $callerNumber")
        DeviceSecurityModule.CallerEmitter.emitCallerNumber(this, callerNumber)
    }
    
}

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "main"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return ReactActivityDelegateWrapper(
          this,
          BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
          object : DefaultReactActivityDelegate(
              this,
              mainComponentName,
              fabricEnabled
          ){})
  }

  /**
    * Align the back button behavior with Android S
    * where moving root activities to background instead of finishing activities.
    * @see <a href="https://developer.android.com/reference/android/app/Activity#onBackPressed()">onBackPressed</a>
    */
  override fun invokeDefaultOnBackPressed() {
      if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
          if (!moveTaskToBack(false)) {
              // For non-root activities, use the default implementation to finish them.
              super.invokeDefaultOnBackPressed()
          }
          return
      }

      // Use the default back button implementation on Android S
      // because it's doing more than [Activity.moveTaskToBack] in fact.
      super.invokeDefaultOnBackPressed()
  }
}
