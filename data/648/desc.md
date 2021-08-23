**<center>Nguồn: Beginner Free Contest 10</center>**

Makacha có $n$ viên gạch hình thang cân đánh số từ $1$ đến $n$. Viên gạch thứ $i$ có đáy nhỏ độ dài $a_i$, đáy lớn độ dài $b_i$ và chiều cao $h_i$. Makacha muốn xếp chồng các viên gạch lên nhau để tạo ra một hình tháp. Ngoại trừ viên gạch ở trên cùng, mỗi viên gạch trong tháp phải có đáy nhỏ chứa trọn vẹn đáy lớn của viên gạch duy nhất nằm trên nó (đáy lớn của viên gạch cuối cùng được đặt dưới mặt đất). Chiều cao của tháp là tổng chiều cao của các viên gạch được tạo thành.

Makacha là một người thích sự to lớn, vì vậy anh ta muốn chiều cao của tháp gạch này là lớn nhất có thể. Nhưng vì số lượng viên gạch quá lớn nên anh ta không thể tìm được cách xếp và muốn nhờ bạn giúp. Bạn sẽ giúp Makacha chứ?

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n\ (1 ≤ n ≤ 500000)$;
- $n$ dòng tiếp theo, mỗi dòng chứa ba số nguyên dương $a_i, b_i, h_i\ (1 ≤ a_i, b_i, h_i ≤ 10^6, a_i ≤ b_i)$.

## Dữ liệu ra:
- Dòng đầu tiên ghi hai số nguyên là chiều cao lớn nhất có thể của tháp gạch và số lượng viên gạch bạn chọn để xây tháp.
- Dòng tiếp theo chứa chỉ số của những viên gạch bạn chọn để xây tháp. Chỉ số các viên gạch được đưa ra theo thứ tự từ trên xuống dưới, có nghĩa là viên gạch được xếp trên cùng được đưa ra đầu tiên... Nếu có nhiều kết quả tối ưu, đưa ra kết quả bất kì.

## Ví dụ:
### Dữ liệu vào:
```
6
2 3 2
4 7 4
3 5 1
1 2 2
4 5 1
5 6 1
```

### Dữ liệu ra:
```
8 3
4 1 2
```

## Giới hạn:
- $50\%$ số điểm có $1 ≤ n ≤ 10000$;
- $50\%$ số điểm còn lại không có giới hạn gì thêm.