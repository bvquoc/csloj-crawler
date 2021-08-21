**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Lê Minh Hoàng, Ngày 2</center>**

Các bé học sinh trường mầm non SuperKids tỏ ra say mê với các trò chơi đòi hỏi tư duy thuật toán chuyên nghiệp. Nhân dịp đến thăm trường, giáo sư X bày ra một trò chơi cho các bạn nhỏ tại đây.

Ban đầu, người chơi được cho $𝑛$ thùng nước đánh số từ $1$ tới $𝑛$. Thùng thứ $𝑖$ có $𝑎_𝑖$ lít nước. Người chơi được quyền múc một lượng nước bất kỳ từ một thùng chuyển sang thùng liền sau (chuyển từ thùng $𝑖$ sang thùng $𝑖 + 1$ với $𝑖$ tùy chọn thỏa mãn $1 ≤ 𝑖 < 𝑛$). Năng lượng tiêu tốn cho thao tác này đúng bằng lượng nước được chuyển (có thể không phải là số nguyên).

Nhiệm vụ của người chơi là phải làm cho lượng nước trong các thùng sắp xếp thứ tự không giảm, tức là:

$$𝑎_1 ≤ 𝑎_2 ≤ ⋯ ≤ 𝑎_𝑛$$

**Yêu cầu:** Hãy tìm phương án chơi sao cho tổng năng lượng tiêu tốn là ít nhất.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $𝑛 ≤ 10^6$;
- Dòng thứ hai chứa $𝑛$ số nguyên không âm $𝑎_1, 𝑎_2, … , 𝑎_𝑛\ (∀𝑖: 𝑎_𝑖 ≤ 10^6)$ cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số thực duy nhất với $1$ chữ số sau dấu chấm thập phân là tổng năng lượng tiêu tốn nếu các bé chơi theo phương án của bạn.

## Ví dụ:
#### Dữ liệu vào:
```
6
1 3 0 0 3 0
```

#### Dữ liệu ra:
```
4.5
```

#### Giải thích:
Ta sẽ chuyển nước để được lượng nước trong các thùng là $1.0,1.0,1.0,1.0,1.5,1.5$:
- Chuyển $2$ lít từ thùng $2$ sang thùng $3$;
- Chuyển $1$ lít từ thùng $3$ sang thùng $4$;
- Chuyển $1.5$ lít từ thùng $5$ sang thùng $6$.