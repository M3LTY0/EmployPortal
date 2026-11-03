
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  
  // 1. GENERAL LAYOUT
  

  container: {
    flex: 1,
    backgroundColor: '#f3f5f9',
    padding: 20,
  },

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f5f9',
    padding: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    elevation: 3,
  },

  section: {
    marginBottom: 24,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },


  
  // 2. HEADINGS AND TEXT
  

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },

  heading: {
    fontSize: 17,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },

  bodyText: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
  },

  secondaryText: {
    fontSize: 14,
    color: '#6b7280',
  },

  smallText: {
    fontSize: 12,
    color: '#9ca3af',
  },

  boldText: {
    fontWeight: '700',
  },


  
  // 3. FORM HEADERS
  

  formHeader: {
    marginBottom: 24,
  },

  formDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 21,
  },

  formGroup: {
    marginBottom: 18,
  },

  formLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 7,
  },

  requiredIndicator: {
    color: '#dc2626',
  },


  
  // 4. INPUT FIELDS
  

  input: {
    width: '100%',
    minHeight: 46,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#111827',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 7,
  },

  inputFocused: {
    borderColor: '#4f46e5',
    borderWidth: 2,
  },

  inputDisabled: {
    backgroundColor: '#f3f4f6',
    color: '#9ca3af',
    opacity: 0.7,
  },

  textArea: {
    minHeight: 110,
    padding: 12,
    textAlignVertical: 'top',
  },

  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },


  
  // 5. VALIDATION STATES
  

  inputError: {
    borderColor: '#dc2626',
    backgroundColor: '#fffafa',
  },

  inputSuccess: {
    borderColor: '#16a34a',
  },

  errorText: {
    fontSize: 12,
    color: '#dc2626',
    marginTop: 5,
  },

  successText: {
    fontSize: 12,
    color: '#15803d',
    marginTop: 5,
  },

  helperText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 5,
  },

  errorContainer: {
    padding: 12,
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fecaca',
    borderRadius: 7,
    marginBottom: 16,
  },

  successContainer: {
    padding: 12,
    backgroundColor: '#f0fdf4',
    borderWidth: 1,
    borderColor: '#bbf7d0',
    borderRadius: 7,
    marginBottom: 16,
  },


  
  // 6. BUTTONS
  

  button: {
    minHeight: 46,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  primaryButton: {
    backgroundColor: '#4f46e5',
  },

  secondaryButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },

  dangerButton: {
    backgroundColor: '#dc2626',
  },

  successButton: {
    backgroundColor: '#16a34a',
  },

  disabledButton: {
    opacity: 0.5,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },

  secondaryButtonText: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '600',
  },

  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },


  
  // 7. CHECKBOXES AND RADIO OPTIONS
  

  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#9ca3af',
    borderRadius: 4,
  },

  checkboxSelected: {
    backgroundColor: '#4f46e5',
    borderColor: '#4f46e5',
  },

  optionGroup: {
    gap: 12,
  },

  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9ca3af',
  },

  radioSelected: {
    borderWidth: 6,
    borderColor: '#4f46e5',
  },


  
  // 8. DIVIDERS AND SPACING
  

  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 20,
  },

  spacer: {
    height: 16,
  },

  smallSpacer: {
    height: 8,
  },

  largeSpacer: {
    height: 28,
  },


  
  // 9. LOADING STATES
  

  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  loadingText: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 10,
  },


  
  // 10. LISTS AND ITEMS
  

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },

  listItemContent: {
    flex: 1,
    marginLeft: 12,
  },

  listItemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },

  listItemDescription: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 3,
  },


  
  // 11. BADGES AND STATUS INDICATORS
  

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },

  badgeSuccess: {
    backgroundColor: '#dcfce7',
  },

  badgeError: {
    backgroundColor: '#fee2e2',
  },

  badgeWarning: {
    backgroundColor: '#fef3c7',
  },

  badgeText: {
    fontSize: 11,
    fontWeight: '600',
  },


  
  // 12. SCREEN FOOTERS
  

  footer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    alignItems: 'center',
  },

  footerText: {
    fontSize: 13,
    color: '#6b7280',
    textAlign: 'center',
  },

});
