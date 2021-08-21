**<center>NGUỒN: Bài tập thầy Hiếu ôn Hải Phòng T11/2020</center>**

Trong năm học $2020-2021$, trường THPT ABC có $n$ học sinh tham gia thi trung học phổ thông quốc gia và may mắn tất cả các em đều vượt qua được kỳ thi khắc nghiệt này. Học sinh nhà trường đã đăng ký thi đại học theo $5$ khối $A,A1,B,C,D$. Ban giám hiệu (BGH) nhà trường quyết định tổ chức một buổi lễ long trọng để phát bằng cho học sinh. Tuy nhiên, do không biết thứ tự từ trước nên các em đã xếp thành một hàng không hợp lý như thầy hiệu trưởng mong muốn. Việc chọn phát bằng cho học sinh khối nào trước không quan trọng nhưng thầy hiệu trưởng muốn với mỗi khối, bằng tốt nghiệp phải được phát hết một lượt. Đồng thời, với nhóm học sinh trong mỗi khối, học sinh có thể được phát theo thứ tự điểm tăng dần hoặc giảm dần. Bằng tốt nghiệp sẽ được phát cho các em theo thứ tự từ đầu hàng tới cuối hàng. Như vậy, một số em sẽ phải ra khỏi chỗ và đứng vào đầu hàng hoặc cuối hàng hoặc giữa hai em học sinh khác.

**Yêu cầu:** Cho biết thứ tự các em học sinh xếp hàng ban đầu, hãy giúp BGH xác định cách phát bằng để số em học sinh phải ra di chuyển khỏi hàng tìm vị trí mới là ít nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n≤500$ là số lượng học sinh;
- $n$ dòng tiếp theo mô tả $n$ học sinh tới xếp hàng theo thứ tự. Mỗi học sinh được mô tả bởi khối thi và điểm số học sinh đó đã đạt được (cách nhau một dấu cách). Không có $2$ thí sinh nào trong một khối bằng điểm nhau.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số học sinh phải di chuyển ra khỏi hàng để tìm chỗ mới ít nhất.

## Ví dụ:
#### Dữ liệu vào:
```
8
D 9
A 15
A 2
D 13
C 2
D 11
A1 8
B 3
```

#### Dữ liệu ra:
```
2
```

## Giới hạn:
- $30\%$ số điểm có $n≤10$;
- $30\%$ số điểm khác chỉ có một khối thi.