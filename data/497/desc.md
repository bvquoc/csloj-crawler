Công ty ABC chuyên thu thập thông tin về những người nổi tiếng. Trong hồ sơ của công ty có ~n~ người nổi tiếng được đánh số từ ~1~ đến ~n~. Hồ sơ này chứa thông tin về ~m~ mối quan hệ, mỗi mối quan hệ được biểu diễn bằng hai số nguyên ~u, v~ cho biết rằng người nổi tiếng ~u~ quen với người nổi tiếng ~v~ và ngược lại.

Để tổ chức chương trình "Khai giảng" thật hoành tráng, trường THPT Chuyên Sơn La muốn mời một số người nổi tiếng trong danh sách của công ty ABC sao cho trong số những người được mời, người nào cũng quen với ít nhất ~k~ người khác và số lượng người được mời phải là nhiều nhất.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương ~n, m, k~;
- ~m~ dòng tiếp theo, mỗi dòng chứa một cặt số ~u, v~ cho biết hai người ~u~ và ~v~ quen biết nhau. Không có mối quan hệ nào được liệt kê lặp lại.

## Dữ liệu ra:
- Dòng đầu ghi số lượng người nhiều nhất mời được, nếu không có cách mời, in ra ~0~;
- Dòng thứ hai liệt kê số chỉ số của những người được mời theo thứ tự tăng dần.

## Ví dụ:
#### Dữ liệu vào:
```
5 7 2
4 3
1 2
4 1
1 3
3 2
2 4
5 4
```

#### Dữ liệu ra:
```
4
1 2 3 4
```

#### Giải thích:
- Sơ đồ mối quan hệ như hình dưới, những người được mời là ~1, 2, 3, 4~
<center><img src="/images/problems/497/HFAMOUS.svg" width="350px" /></center>

## Giới hạn:
- ~1 ≤ n, m, k ≤ 10^5; k ≤ n; 1 ≤ u, v ≤ n; u ≠ v~.