**<center>NGUỒN: Bài tập thầy Bình ôn Bắc Giang</center>**

Theo thống kê cho biết mức độ tăng trưởng kinh tế của nước Peace trong năm $2100$ rất khả quan. Cả nước có tổng cộng $N$ thành phố lớn nhỏ  được đánh số tuần tự từ $1$ đến $N$ phát triển khá đồng đều. Giữa $N$ thành phố này là một mạng lưới gồm $M$ đường đi hai chiều, mỗi tuyến đường nối hai trong $N$ thành phố sao cho không có hai thành phố nào được nối bởi quá một tuyến đường. Trong $N$ thành phố này thì thành phố $1$ và thành phố $N$ là hai trung tâm kinh tế lớn nhất nước và hệ thống đường đảm bảo luôn có ít nhất một cách đi từ thành phố $1$ đến thành phố $N$.

Tuy nhiên, cả hai trung tâm này đều có dấu hiệu quá tải về mật độ dân số. Vì vậy, đức vua Peaceful quyết định chọn ra thêm một thành phố nữa để đầu tư thành một trung tâm kinh tế thứ ba. Thành phố này sẽ tạm ngưng mọi hoạt động thường nhật, cũng như mọi luồng lưu thông ra vào để tiến hành nâng cấp cơ sở hạ tầng. Nhưng trong thời gian sửa chữa ấy, phải bảo đảm đường đi ngắn nhất từ thành phố $1$ đến thành phố $N$ không bị thay đổi, nếu không nền kinh tế quốc gia sẽ bị trì trệ.
Vị trí và đường nối giữa $N$ thành phố được mô tả như một đồ thị $N$ đỉnh $M$ cạnh. Hãy giúp nhà vua đếm số lượng thành phố có thể chọn làm trung tâm kinh tế thứ ba sao cho thành phố được chọn thỏa mãn các điều kiện ở trên.\

## Dữ liệu vào:
- Dòng đầu tiên ghi hai số nguyên dương $N$ và $M$ là số thành phố và số tuyến đường;
- Dòng thứ $i$ trong số $M$ dòng tiếp theo ghi ba số nguyên dương $x_i, y_i$ và $d_i$ với ý nghĩa tuyến đường thứ $i$ có độ dài di và nối giữa hai thành phố $x_i, y_i$.

## Dữ liệu ra:
- Dòng đầu tiên ghi số tự nhiên $S$ là số lượng các thành phố có thể chọn làm trung tâm kinh tế thứ ba.
- $S$ dòng tiếp theo, mỗi dòng ghi một số nguyên dương là số thứ tự của các thành phố có thể chọn (in theo thứ tự tăng dần).

## Ví dụ:
### Dữ liệu vào:
```
6 6
1 2 1
2 3 1
3 6 1
1 4 100
4 5 100
5 6 100
```

### Dữ liệu ra:
```
2
4
5
```

## Giới hạn:
- $2 ≤ N ≤ 30000; 1 ≤ M ≤ 100000; 1 ≤ d_i ≤ 1000$;
- Có $50\%$ số test có $N ≤ 100$ và $M ≤ 1000$.