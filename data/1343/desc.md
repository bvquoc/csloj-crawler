**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 1 - Ôn Hải Phòng T11/2020</center>**

Công ty BI-BO có n nhân viên. BiBo muốn tái cấu trúc lại công ty thành một cây, với mỗi nhân viên tương ứng là mỗi nút của cây. Nhân viên tương ứng với một nút sẽ là người đứng đầu của các nhân viên tương ứng với nút con của mình.

Mỗi nhân viên trong công ty đưa ra một danh sách nhân viên mà anh ấy/cô ấy muốn trở thành cấp trên của mình. Các nhân viên trong công ty được đánh số từ $1$ đến $n$.

Mức lương trong công ty được xác định như sau:
- Mức lương là bội số nguyên dương của mức lương tối thiểu $k$ và không thấp hơn $k$;
- Mức lương của cấp trên phải thấp hơn mức lương của cấp dưới trực tiếp.

Hãy tái cấu trúc lại công ty sao cho tổng mức lương phải trả là ít nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $n,k\ (1≤k≤550)$;
- $n$ dòng tiếp theo, dòng thứ $i$ mô tả danh sách nhân viên mà người $i$ muốn thành cấp trên của mình. Bắt đầu bằng số nguyên $k_i$ là số lượng nhân viên mà người $i$ muốn là cấp trên của mình. Sau đó là $k_i$ số nguyên dương là số hiệu nhân viên.

## Dữ liệu ra:
- Ghi ra một số nguyên là tổng số lương tối thiểu phải trả sau khi tái cấu trúc công ty.

## Ví dụ:
### Dữ liệu vào:
```
4 100
1 4
3 1 3 4
2 1 2
1 3
```

### Dữ liệu ra:
```
800
```

## Giới hạn:
- $22\%$ số điểm có $2≤n≤10;∑_{i=1}^n k_i ≤20$;
- $45\%$ số điểm khác có $2≤n≤100;∑_{i=1}^n k_i ≤200$;
- $33\%$ số điểm còn lại có $2≤n≤5 000;∑_{i=1}^n k_i ≤10000$.