**<center>NGUỒN: Bài tập thầy Vũ Mạnh Hà - Ôn Hải Phòng 07/11/2020</center>**

Bờm viết một chương trình trả lời các truy vấn RMQ (range minimum query) trên dãy số $𝑥_1, 𝑥_2, … , 𝑥_𝑁$ 
đôi một phân biệt, trong đó dữ liệu được cho trong hai file: file chứa dãy số và file chứa truy vấn.

Bờm lỡ tay làm hỏng file chứa dãy số nên không kiểm tra được tính đúng dắn của kết quả. Vì vậy Bờm nhờ bạn xác định xem các trả lời của chương trình có là hợp lệ hay không.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên $𝑁, 𝑄\ (1 ≤ 𝑁 ≤ 10^6; 1 ≤ 𝑄 ≤ 25000)$ là kích thước dãy số và số truy vấn;
- $Q$ dòng tiếp theo, dòng thứ $𝑖$ ghi ba số nguyên $𝑙, 𝑟, 𝑣\ (1 ≤ 𝑙 ≤ 𝑟 ≤ 𝑁; 1 ≤ 𝑣 ≤ 10^9)$ chỉ truy vấn thứ $𝑖$ thực hiện tìm $min\{𝑥_𝑙, 𝑥_{𝑙+1}, … , 𝑥_𝑟\}$ được kết quả là $𝑣$.

## Dữ liệu ra:
- Ghi ra duy nhất một số nguyên kết quả, số này bằng $0$ nếu các trả lời truy vấn là không mâu thuẫn, ngược lại số này là số hiệu truy vấn đầu tiên có kết quả mâu thuẫn với các truy vấn trước đó.

## Ví dụ:
#### Dữ liệu vào:
```
20 4
1 10 7
5 19 7
3 12 8
11 15 12
```

#### Dữ liệu ra:
```
3
```

**Giải thích:** do các phần tử của dãy là đôi một phân biệt nên $𝑟𝑚𝑞(1, 10) = 𝑟𝑚𝑞(5, 19) = 7$ cho ta 
$𝑟𝑚𝑞(5, 10) = 7$, điều này mâu thuẫn với $𝑟𝑚𝑞(3, 12) = 8$.