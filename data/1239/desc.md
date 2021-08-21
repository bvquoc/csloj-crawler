**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 2</center>**

Bờm vừa được bổ nhiệm làm trưởng nhóm quản trị mạng của một công ty lớn. Công ty từ lâu đã không thay đổi hệ thống mã nhân viên. Mỗi nhân viên của công ty có một mã gồm $4$ chữ số. Để đăng nhập hệ thống, không ai phải sử dụng tên đăng nhập cũng như mật khẩu mà chỉ cần gõ vào mã nhân viên của mình. Khi công ty phát triển mạnh về nhân sự, Ban giám đốc quyết định dùng thêm cả chữ cái để tạo mã nhân viên, nhưng vẫn giữ nguyên độ dài của mã là $4$.

Bờm cảm thấy không hài lòng về hệ thống mã hóa này. Bởi vì, nếu hai nhân viên có mã chỉ khác nhau một vị trí, chẳng hạn $81ab$ và $82ab$, thì khi nhân viên có mã $81ab$ đăng nhập hệ thống gõ nhầm là $82ab$, hệ thống vẫn chấp nhận cho thâm nhập và mọi điều phiền toái có thể xảy ra.

Bờm muốn thu thập dữ liệu thống kê về các mã nhân viên đang sử dụng, cụ thể là tính số lượng cặp mã chỉ khác nhau bởi $1, 2, 3, 4$ vị trí. Với dữ liệu thống kê này, Bờm hy vọng sẽ thuyết phục được Ban giám đốc về sự cần thiết phải phát triển hệ thống mã nhân viên mới hoàn thiện hơn.

**Yêu cầu:** Cho danh sách các mã nhân viên và số nguyên $D$, hãy tìm số lượng cặp mã khác nhau đúng $D$ vị trí.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $N$ và $D$, trong đó $N$ là số lượng mã nhân viên còn $D$ là số lượng vị trí phân biệt $(2 ≤ N ≤ 50000; 1 ≤ D ≤ 4)$;
- Mỗi một trong số $N$ dòng tiếp theo chứa mã của một nhân viên.

Giả thiết là: Mỗi mã nhân viên là dãy gồm $4$ ký hiệu, mỗi ký hiệu là một trong $26$ chữ cái tiếng Anh in thường từ $a$ đến $z$ hoặc một chữ số từ $0$ đến $9$. Không có hai mã nào trùng nhau.

## Dữ liệu ra:
- Ghi ra một số nguyên là số lượng cặp mã nhân viên khác nhau đúng $D$ vị trí.

## Ví dụ:
#### Dữ liệu vào:
```
4 1
0000
a010
0202
a0e2
```

#### Dữ liệu ra:
```
0
```

#### Dữ liệu vào:
```
4 2
0000
a010
0202
a0e2
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Trong ví dụ thứ nhất không có hai mã nào khác nhau đúng $1$ vị trí.
- Trong ví dụ thứ hai có $3$ cặp mã khác nhau đúng $2$ vị trí, đó là các cặp: $(0000, a010), (0000, 0202)$, và $(a010, a0e2)$.