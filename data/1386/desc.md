**<center>NGUỒN: Bài tập thầy Hiếu ôn Hải Phòng T11/2020</center>**

Trên tuyến đường từ Bắc Nam có $𝑛$ điểm đánh số $1, 2, 3, … , n$. Có $𝑚$ tuyến xe Bus vận tải hành khách dọc theo tuyến đường này. Tuyến xe thứ $𝑖$ di chuyển từ điểm $𝑙_𝑖$ tới điểm $𝑟_𝑖$ và ngược lại trong ngày. Sau khi có thông tin về dịch Covid $19$ bùng phát tại Đà Nẵng, Quảng Nam, bộ y tế đã phối hợp cùng các ban bộ ngành, các địa phương lập các chốt kiểm dịch lưu động. Một chốt đặt tại điểm $𝑝$ sẽ kiểm tra được tuyến xe Bus thứ $𝑖$ nếu như $𝑙_𝑖 ≤ 𝑝 ≤ 𝑟_𝑖\ (1 ≤ 𝑖 ≤ 𝑛)$. Các chốt này dự kiến được đặt thay đổi theo ngày, và dự kiến thực hiện 
trong $𝑘$ ngày.

**Yêu cầu:** thông tin các chốt theo từng ngày và các tuyến xe Bus. Đếm số lượng tuyến xe chưa đươc kiểm dịch trong từng ngày.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương $𝑛, 𝑚, 𝑘\ (𝑛 ≤ 10^6, 𝑚 ≤ 10^5)$;
- $𝑚$ dòng tiếp theo, dòng thứ $𝑖\ (1 ≤ 𝑖 ≤ 𝑚)$ chứa hai số nguyên dương $𝑙_𝑖, 𝑟_𝑖\ (𝑙_𝑖 ≤ 𝑟_𝑖)$ mô tả tuyến xe Bus thứ $𝑖$; 
- $𝑘$ nhóm dòng cuối cùng, mỗi nhóm gồm hai dòng mô tả phương án đặt chốt kiểm dịch trong một ngày:
    - Dòng đầu tiên là số nguyên dương $𝑡$ − mô tả số chốt kiểm dịch được đặt;
    - Dòng thứ hai chứa $𝑡$ số nguyên dương mô tả các vị trí đặt chốt theo thứ tự tăng dần.

## Dữ liệu ra:
- Ghi ra $𝑘$ dòng, mỗi dòng một số nguyên là số lượng xe Bus chưa được kiểm dịch trong ngày tương ứng theo thứu tự trong **dữ liệu vào**

## Ví dụ:
#### Dữ liệu vào:
```
10 4 3
1 3
2 4
4 5
6 7
3
2 4 6
2
4 6
1
4
```

#### Dữ liệu ra:
```
0
1
2
```

## Giới hạn:
- $30\%$ số điểm có $𝑘 ≤ 5; 𝑚 ≤ 10^3$;
- $30\%$ số điểm khác có $𝑘 ≤ 5; 𝑚 ≤ 10^5$
- $40\%$ số điểm còn lại có $𝑚 ≤ 10^5$;

Trong tất cả các test, tổng số lượng chốt đặt trong $𝑘$ ngày không vượt quá $2\times 10^5$.